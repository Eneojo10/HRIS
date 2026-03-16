import { useEffect, useMemo, useState } from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './globals';

const ROUTE_PERMISSION_MAP = {
  analytics: 'viewAnalytics',
  hranalytics: 'viewAnalytics',
  workforce: 'viewAnalytics',
  metrics: 'viewAnalytics',
  equity: 'viewAnalytics',
  trends: 'viewAnalytics',
  distribution: 'viewAnalytics',
  talent: 'viewAnalytics',

  employees: 'viewEmployees',
  employee: 'viewEmployees',
  'employee-wizard': 'editEmployees',

  recruitment: 'userManagement',
  posting: 'userManagement',
  interview: 'userManagement',
  today: 'userManagement',
  tomorrow: 'userManagement',
  week: 'userManagement',
  all: 'userManagement',

  onboarding: 'viewEmployees',
  templates: 'viewEmployees',

  performance: 'viewAnalytics',
  perform: 'viewAnalytics',
  feedback: 'viewAnalytics',
  analy: 'viewAnalytics',

  tracking: 'payrollAccess',
  time: 'payrollAccess',
  sheet: 'payrollAccess',
  ana: 'payrollAccess',
  timer: 'payrollAccess',
  blk: 'payrollAccess',

  management: 'viewEmployees',
  schedules: 'viewEmployees',

  departments: 'manageDepartments',
  ddetails: 'manageDepartments',
  structure: 'manageDepartments',
  budgets: 'manageDepartments',
  bana: 'manageDepartments',

  payroll: 'payrollAccess',
  paydetails: 'payrollAccess',
  employeepayroll: 'payrollAccess',
  reportpayroll: 'payrollAccess',
  tics: 'payrollAccess',
  pay: 'payrollAccess',
  review: 'payrollAccess',
  next: 'payrollAccess',
  process: 'payrollAccess',
  progrezz: 'payrollAccess',
  final: 'payrollAccess',

  benefits: 'manageBenefits',
  bene: 'manageBenefits',
  plans: 'manageBenefits',
  reports: 'manageBenefits',
  ben: 'manageBenefits',

  settings: 'systemSettings'
};

const ALWAYS_ALLOWED_ROUTES = new Set(['mainboard', 'dashboard']);

const loadUserFromStorage = () => {
  try {
    const raw = localStorage.getItem('user');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
};

const PrivateRoutes = () => {
  const location = useLocation();
  const token = localStorage.getItem('token');
  const storedUser = useMemo(() => loadUserFromStorage(), []);
  const [permissions, setPermissions] = useState(storedUser?.permissions || {});
  const [loading, setLoading] = useState(Boolean(token));

  useEffect(() => {
    if (!token) {
      setLoading(false);
      return;
    }

    const fetchMySettings = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/settings/me`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const latestPermissions = response.data?.permissions || {};
        setPermissions(latestPermissions);

        const currentUser = loadUserFromStorage() || {};
        localStorage.setItem('user', JSON.stringify({
          ...currentUser,
          permissions: latestPermissions
        }));
      } catch (error) {
        setPermissions(storedUser?.permissions || {});
      } finally {
        setLoading(false);
      }
    };

    fetchMySettings();
  }, [token, storedUser?.permissions]);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  if (loading) {
    return null;
  }

  const user = loadUserFromStorage() || {};
  const isSuperAdmin = Boolean(user?.isSuperAdmin);
  const hasPermissionModel = Object.keys(permissions || {}).length > 0;

  const firstRouteSegment = location.pathname.split('/')[1]?.toLowerCase();
  const requiredPermission = ROUTE_PERMISSION_MAP[firstRouteSegment];

  // Fail closed for non-superadmins: if permission model is unavailable,
  // only allow landing pages while preventing access to the rest.
  if (!isSuperAdmin && !hasPermissionModel && !ALWAYS_ALLOWED_ROUTES.has(firstRouteSegment)) {
    return <Navigate to="/mainboard" replace />;
  }

  if (!isSuperAdmin && hasPermissionModel && !ALWAYS_ALLOWED_ROUTES.has(firstRouteSegment) && !requiredPermission) {
    return <Navigate to="/mainboard" replace />;
  }

  if (
    requiredPermission &&
    !isSuperAdmin &&
    hasPermissionModel &&
    !permissions?.[requiredPermission]
  ) {
    return <Navigate to="/mainboard" replace />;
  }

  return <Outlet />;
};

export default PrivateRoutes;