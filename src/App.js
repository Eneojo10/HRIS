
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ThemeProvider } from './ThemeContext';
import logo from './Images/enesHr_logo_image-removebg-preview.png';


const Dashboard = lazy(() => import('./Menu/Dashboard'));
const MainDashBoard = lazy(() => import('./Pages/MainDashBoard'));
const Analytics = lazy(() => import('./Analytics/Analytics'));
const Employees = lazy(() => import('./Pages/Employees'));
const Recruitment = lazy(() => import('./Recruitment center/Recruitment'));
const Onboarding = lazy(() => import('./Employee Onboarding/Onboarding'));
const Performance = lazy(() => import('./Performance/Performance'));
const Tracking = lazy(() => import('./Time Tracking/Tracking'));
const Leave = lazy(() => import('./Leave/Leave'));
const Schedules = lazy(() => import('./Schedules/Schedules'));
const Payroll = lazy(() => import('./Payroll/Payroll'));
const Benefits = lazy(() => import('./Benefits/Benefits'));
const Departments = lazy(() => import('./Departments/Departments'));
const Settings = lazy(() => import('./Settings/Settings'));
const Performancedetails = lazy(() => import('./Performance/Performancedetails'));
const Analyticsdetails = lazy(() => import('./Analytics/Analyticsdetails'));
const Workforce = lazy(() => import('./Analytics/Workforce'));
const Postingdetails = lazy(() => import('./Recruitment center/Postingdetails'));
const Interviewdetails = lazy(() => import('./Recruitment center/Interviewdetails'));
const Onboardingdetails = lazy(() => import('./Employee Onboarding/Onboardingdetails'));
const Templatesdetails = lazy(() => import('./Employee Onboarding/Templatesdetails'));
const Analyticdetails = lazy(() => import('./Recruitment center/Analyticdetails'));
const Feedback = lazy(() => import('./Performance/Feedback'));
const Performanceanalytics = lazy(() => import('./Performance/Performanceanalytics'));
const Timedetails = lazy(() => import('./Time Tracking/Timedetails'));
const Sheetdetails = lazy(() => import('./Time Tracking/Sheetdetails'));
const Anadetails = lazy(() => import('./Time Tracking/Anadetails'));
const Paydetails = lazy(() => import('./Payroll/Paydetails'));
const Employeedetails = lazy(() => import('./Payroll/Employeedetails'));
const Reportdetails = lazy(() => import('./Payroll/Reportdetails'));
const Ticsdetails = lazy(() => import('./Payroll/Ticsdetails'));
const Leavedetails = lazy(() => import('./Leave/Leavedetails'));
const Calender = lazy(() => import('./Leave/Calender'));
const Balance = lazy(() => import('./Leave/Balance'));
const Leaveanalytics = lazy(() => import('./Leave/Leaveanalytics'));
const Scheduledetails = lazy(() => import('./Schedules/Scheduledetails'));
const Shiftdetails = lazy(() => import('./Schedules/Shiftdetails'));
const Employeedetailz = lazy(() => import('./Schedules/Employeedetailz'));
const Sanalytics = lazy(() => import('./Schedules/Sanalytics'));
const Benefitsdetails = lazy(() => import('./Benefits/Benefitsdetails'));
const Plans = lazy(() => import('./Benefits/Plans'));
const Reports = lazy(() => import('./Benefits/Reports'));
const Benanalytics = lazy(() => import('./Benefits/Benanalytics'));
const Ddetails = lazy(() => import('./Departments/Ddetails'));
const Structure = lazy(() => import('./Departments/Structure'));
const Budgets = lazy(() => import('./Departments/Budgets'));
const Banalytics = lazy(() => import('./Departments/Banalytics'));
const Today = lazy(() => import('./Recruitment center/Today'));
const Tomorrow = lazy(() => import('./Recruitment center/Tomorrow'));
const Week = lazy(() => import('./Recruitment center/Week'));
const All = lazy(() => import('./Recruitment center/All'));
const Chart = lazy(() => import('./Pages/Chart'));
const HiringTrends = lazy(() => import('./Pages/Hiringtrends'));
const Login = lazy(() => import('./Login/Login'));
const VerifyLogin = lazy(() => import('./Login/VerifyLogin'));
const PayrollDetails = lazy(() => import('./Payroll/PayrollDetails'));
const System = lazy(() => import('./Settings/System'));
const Umanagement = lazy(() => import('./Settings/Umanagement'));
const Security = lazy(() => import('./Settings/Security'));
const Integration = lazy(() => import('./Settings/Integration'));
const Categories = lazy(() => import('./Others/Categories'));
const Documentation = lazy(() => import('./Others/Documentation'));
const Equipment = lazy(() => import('./Others/Equipment'));
const Training = lazy(() => import('./Others/Training'));
const Meetings = lazy(() => import('./Others/Meetings'));
const SystemAccess = lazy(() => import('./Others/SystemAccess'));
const Status = lazy(() => import('./Others/Status'));
const Pending = lazy(() => import('./Others/Pending'));
const Progress = lazy(() => import('./Others/Progress'));
const Complete = lazy(() => import('./Others/Complete'));
const Overdue = lazy(() => import('./Menu/Overdue'));
const AllDepartment = lazy(() => import('./Others/AllDepartment'));
const Engineering = lazy(() => import('./Others/Engineering'));
const Product = lazy(() => import('./Others/Product'));
const Sales = lazy(() => import('./Others/Sales'));
const Design = lazy(() => import('./Others/Design'));
const Marketing = lazy(() => import('./Others/Marketing'));
const Executive = lazy(() => import('./Others/Executive'));
const Metrics = lazy(() => import('./Analytics/Metrics'));
const Equity = lazy(() => import('./Analytics/Equity'));
const PayrollTrends = lazy(() => import('./Analytics/PayrollTrends'));
const Distribution = lazy(() => import('./Analytics/Distribution'));
const Talent = lazy(() => import('./Analytics/Talent'));
const Personal = lazy(() => import('./Pages/Register/Personal'));
const Employment = lazy(() => import('./Pages/Register/Employment'));
const Contact = lazy(() => import('./Pages/Register/Contact'));
const Compensation = lazy(() => import('./Pages/Register/Compensation'));
const Additional = lazy(() => import('./Pages/Register/Additional'));
const Basic = lazy(() => import('./Pages/Postjob/Basic'));
const Details = lazy(() => import('./Pages/Postjob/Details'));
const Jobsettings = lazy(() => import('./Pages/Postjob/Jobsettings'));
const JobWizard = lazy(() => import('./Pages/Postjob/JobWizard'));
const Onboard = lazy(() => import('./Pages/Onboard/Onboard'));
const PerformOne = lazy(() => import('./Pages/Perform/PerformOne'));
const GoalsKPIs = lazy(() => import('./Pages/Perform/GoalsKPIs'));
const Core = lazy(() => import('./Pages/Perform/Core'));
const Performsettings = lazy(() => import('./Pages/Perform/Performsettings'));
const Request = lazy(() => import('./Pages/Request/Request'));
const Dept = lazy(() => import('./Pages/DepartmentTwo/Dept'));
const Pay = lazy(() => import('./Pages/Pay/Pay'));
const Shift = lazy(() => import('./Pages/Schedules/Shift'));
const Recurring = lazy(() => import('./Pages/Schedules/Recurring'));
const Bulk = lazy(() => import('./Pages/Schedules/Bulk'));
const Time = lazy(() => import('./Pages/Time/Time'));
const Review = lazy(() => import('./Pages/Pay/Review'));
const PayrollNext = lazy(() => import('./Pages/Pay/PayrollNext'));
const Process = lazy(() => import('./Pages/Pay/Process'));
const Progrezz = lazy(() => import('./Pages/Pay/Progrezz'));
const Final = lazy(() => import('./Pages/Pay/Final'));
const Timer = lazy(() => import('./Pages/Time/Timer'));
const Blk = lazy(() => import('./Pages/Time/Blk'));
const Bplans = lazy(() => import('./Pages/Benefitsplans/Bplans'));
const Dependent = lazy(() => import('./Pages/Benefitsplans/Dependent'));
const Summ = lazy(() => import('./Pages/Benefitsplans/Summ'));
const Reusable = lazy(() => import('./Pages/Reusable'));
const EmployeeWizard = lazy(() => import('./Pages/EmployeeWizard'));
const PrivateRoutes = lazy(() => import('./Pages/Utils/PrivateRoutes'));

const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
    <style>
      {`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}
    </style>
    <img src={logo} alt='Loading' style={{ width: '150px', height: 'auto', animation: 'pulse 1.5s infinite' }} />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className='App'>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route index element={<Login />} />
              <Route path="/verify-login" element={<VerifyLogin />} />
              <Route element={<PrivateRoutes />} >
                <Route path="mainboard" element={<MainDashBoard />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="analytics" element={<Analytics />} />
                <Route path="employees" element={<Employees />} />
                <Route path="recruitment" element={<Recruitment />} />
                <Route path="onboarding" element={<Onboarding />} />
                <Route path="performance" element={<Performance />} />
                <Route path="tracking" element={<Tracking />} />
                <Route path="management" element={<Leave />} />
                <Route path="schedules" element={<Schedules />} />
                <Route path="payroll" element={<Payroll />} />
                <Route path="benefits" element={<Benefits />} />
                <Route path="departments" element={<Departments />} />
                <Route path="settings" element={<Settings />} />
                <Route path="perform" element={<Performancedetails />} />
                <Route path="HRanalytics" element={<Analyticsdetails />} />
                <Route path="workforce" element={<Workforce />} />
                <Route path="posting" element={<Postingdetails />} />
                <Route path="interview" element={<Interviewdetails />} />
                <Route path="employee" element={<Onboardingdetails />} />
                <Route path="templates" element={<Templatesdetails />} />
                <Route path="analyst" element={<Analyticdetails />} />
                <Route path="feedback" element={<Feedback />} />
                <Route path="analy" element={<Performanceanalytics />} />
                <Route path="time" element={<Timedetails />} />
                <Route path="sheet" element={<Sheetdetails />} />
                <Route path="ana" element={<Anadetails />} />
                <Route path="payroll" element={<Paydetails />} />
                <Route path="employeepayroll" element={<Employeedetails />} />
                <Route path="reportpayroll" element={<Reportdetails />} />
                <Route path="tics" element={<Ticsdetails />} />
                <Route path="Leavedetails" element={<Leavedetails />} />
                <Route path="calender" element={<Calender />} />
                <Route path="balance" element={<Balance />} />
                <Route path="Leaveanalytics" element={<Leaveanalytics />} />
                <Route path="scheduledetails" element={<Scheduledetails />} />
                <Route path="Shift" element={<Shiftdetails />} />
                <Route path="details" element={<Employeedetailz />} />
                <Route path="sanalytics" element={<Sanalytics />} />
                <Route path="bene" element={<Benefitsdetails />} />
                <Route path="plans" element={<Plans />} />
                <Route path="Reports" element={<Reports />} />
                <Route path="ben" element={<Benanalytics />} />
                <Route path="Ddetails" element={<Ddetails />} />
                <Route path="structure" element={<Structure />} />
                <Route path="budgets" element={<Budgets />} />
                <Route path="bana" element={<Banalytics />} />
                <Route path="today" element={<Today />} />
                <Route path="tomorrow" element={<Tomorrow />} />
                <Route path="week" element={<Week />} />
                <Route path="all" element={<All />} />
                <Route path="chart" element={<Chart />} />
                <Route path="pie" element={<HiringTrends />} />
                <Route path="payrolldetails" element={<PayrollDetails />} />
                <Route path="system" element={<System />} />
                <Route path="management" element={<Umanagement />} />
                <Route path="security" element={<Security />} />
                <Route path="integration" element={<Integration />} />
                <Route path="categories" element={<Categories />} />
                <Route path="docs" element={<Documentation />} />
                <Route path="equip" element={<Equipment />} />
                <Route path="training" element={<Training />} />
                <Route path="meetings" element={<Meetings />} />
                <Route path="access" element={<SystemAccess />} />
                <Route path="status" element={<Status />} />
                <Route path="pending" element={<Pending />} />
                <Route path="progress" element={<Progress />} />
                <Route path="complete" element={<Complete />} />
                <Route path="overdue" element={<Overdue />} />
                <Route path="alldept" element={<AllDepartment />} />
                <Route path="engineering" element={<Engineering />} />
                <Route path="products" element={<Product />} />
                <Route path="sales" element={<Sales />} />
                <Route path="design" element={<Design />} />
                <Route path="marketing" element={<Marketing />} />
                <Route path="executive" element={<Executive />} />
                <Route path="metrics" element={<Metrics />} />
                <Route path="equity" element={<Equity />} />
                <Route path="trends" element={<PayrollTrends />} />
                <Route path="distribution" element={<Distribution />} />
                <Route path="talent" element={<Talent />} />
                <Route path="personal" element={<Personal onNext={() => { }} onClose={() => { }} />} />
                <Route path="employment" element={<Employment onNext={() => { }} onClose={() => { }} />} />
                <Route path="contact" element={<Contact onNext={() => { }} onClose={() => { }} />} />
                <Route path="compensation" element={<Compensation onNext={() => { }} onClose={() => { }} />} />
                <Route path="addition" element={<Additional />} />
                <Route path="job-wizard" element={<JobWizard onClose={() => { }} />} />
                <Route path="basic" element={<Basic onNext={() => { }} onClose={() => { }} />} />
                <Route path="details" element={<Details onNext={() => { }} onBack={() => { }} onClose={() => { }} />} />
                <Route path="jobsettings" element={<Jobsettings />} />
                <Route path="onboard" element={<Onboard />} />
                <Route path="perform" element={<PerformOne />} />
                <Route path="goalkpi" element={<GoalsKPIs />} />
                <Route path="core" element={<Core />} />
                <Route path="perfohmance" element={<Performsettings />} />
                <Route path="request" element={<Request />} />
                <Route path="dept" element={<Dept />} />
                <Route path="pay" element={<Pay />} />
                <Route path="shift" element={<Shift />} />
                <Route path="recur" element={<Recurring />} />
                <Route path="bulk" element={<Bulk />} />
                <Route path="times" element={<Time />} />
                <Route path="review" element={<Review />} />
                <Route path="next" element={<PayrollNext />} />
                <Route path="process" element={<Process />} />
                <Route path="progrezz" element={<Progrezz />} />
                <Route path="final" element={<Final />} />
                <Route path="timer" element={<Timer />} />
                <Route path="blk" element={<Blk />} />
                <Route path="bplans" element={<Bplans />} />
                <Route path="dependent" element={<Dependent />} />
                <Route path="summ" element={<Summ />} />
                <Route path='use' element={<Reusable />} />
                <Route path="employee-wizard" element={<EmployeeWizard />} />
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
