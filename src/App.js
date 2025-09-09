import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Menu/Dashboard';
import MainDashBoard from './Pages/MainDashBoard';
import Analytics from './Analytics/Analytics';
import Employees from './Pages/Employees';
import Recruitment from './Recruitment center/Recruitment';
import Onboarding from './Employee Onboarding/Onboarding';
import Performance from './Performance/Performance';
import Tracking from './Time Tracking/Tracking'
import Leave from './Leave/Leave';
import Schedules from './Schedules/Schedules';
import Payroll from './Payroll/Payroll'
import Benefits from './Benefits/Benefits';
import Departments from './Departments/Departments'
import Settings from './Settings/Settings';
import Performancedetails from './Performance/Performancedetails';
import Analyticsdetails from './Analytics/Analyticsdetails';
import Workforce from './Analytics/Workforce';
import Postingdetails from './Recruitment center/Postingdetails'
import Interviewdetails from './Recruitment center/Interviewdetails';
import Onboardingdetails from './Employee Onboarding/Onboardingdetails';
import Templatesdetails from './Employee Onboarding/Templatesdetails';
import Analyticdetails from './Recruitment center/Analyticdetails';
import Feedback from './Performance/Feedback';
import Performanceanalytics from './Performance/Performanceanalytics';
import Timedetails from './Time Tracking/Timedetails';
import Sheetdetails from './Time Tracking/Sheetdetails';
import Anadetails from './Time Tracking/Anadetails';
import Paydetails from './Payroll/Paydetails';
import Employeedetails from './Payroll/Employeedetails';
import Reportdetails from './Payroll/Reportdetails';
import Ticsdetails from './Payroll/Ticsdetails';
import Leavedetails from './Leave/Leavedetails';
import Calender from './Leave/Calender';
import Balance from './Leave/Balance';
import Leaveanalytics from './Leave/Leaveanalytics';
import Scheduledetails from './Schedules/Scheduledetails';
import Shiftdetails from './Schedules/Shiftdetails';
import Employeedetailz from './Schedules/Employeedetailz';
import Sanalytics from './Schedules/Sanalytics';
import Benefitsdetails from './Benefits/Benefitsdetails';
import Plans from './Benefits/Plans';
import Reports from './Benefits/Reports';
import Benanalytics from './Benefits/Benanalytics';
import Ddetails from './Departments/Ddetails';
import Structure from './Departments/Structure';
import Budgets from './Departments/Budgets';
import Banalytics from './Departments/Banalytics';
import Today from './Recruitment center/Today';
import Tomorrow from './Recruitment center/Tomorrow';
import Week from './Recruitment center/Week';
import All from './Recruitment center/All';
import Chart from './Pages/Chart'
import HiringTrends from './Pages/Hiringtrends';
import Login from './Login/Login';
import PayrollDetails from './Payroll/PayrollDetails';
import System from './Settings/System';
import Umanagement from './Settings/Umanagement';
import Security from './Settings/Security';
import Integration from './Settings/Integration';
import Categories from './Others/Categories';
import Documentation from './Others/Documentation';
import Equipment from './Others/Equipment';
import Training from './Others/Training';
import Meetings from './Others/Meetings'
import SystemAccess from './Others/SystemAccess';
import Status from './Others/Status';
import Pending from './Others/Pending';
import Progress from './Others/Progress';
import Complete from './Others/Complete';
import Overdue from './Menu/Overdue';
import AllDepartment from './Others/AllDepartment';
import Engineering from './Others/Engineering';
import Product from './Others/Product';
import Sales from './Others/Sales';
import Design from './Others/Design';
import Marketing from './Others/Marketing';
import Executive from './Others/Executive';
import Metrics from './Analytics/Metrics';
import Equity from './Analytics/Equity';
import PayrollTrends from './Analytics/PayrollTrends';
import Distribution from './Analytics/Distribution';
import Talent from './Analytics/Talent';
import Personal from './Pages/Register/Personal';
import Employment from './Pages/Register/Employment';
import Contact from './Pages/Register/Contact';
import Compensation from './Pages/Register/Compensation';
import Additional from './Pages/Register/Additional';
import Basic from './Pages/Postjob/Basic';
import Details from './Pages/Postjob/Details';
import Jobsettings from './Pages/Postjob/Jobsettings';
import Onboard from './Pages/Register/Onboard/Onboard';
import PerformOne from './Pages/Perform/PerformOne';
import GoalsKPIs from './Pages/Perform/GoalsKPIs';
import Core from './Pages/Perform/Core';
import Performsettings from './Pages/Perform/Performsettings';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="mainboard" element={<MainDashBoard />} />
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
          <Route path="/" element={<Login />} />
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
          <Route path="personal" element={<Personal />} />
          <Route path="employment" element={<Employment />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compensation" element={<Compensation />} />
          <Route path="addition" element={<Additional />} />
          <Route path="basic" element={<Basic />} />
          <Route path="details" element={<Details />} />
          <Route path="jobsettings" element={<Jobsettings />} />
          <Route path="onboard" element={<Onboard />} />
          <Route path="perform" element={<PerformOne />} />
          <Route path="goalkpi" element={<GoalsKPIs />} />
          <Route path="core" element={<Core />} />
          <Route path="perfohmance" element={<Performsettings />} />
          {/* <Route path="onboard" element={<Onboard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
