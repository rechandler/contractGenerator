// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/sign-up" page={SignUpPage} name="signUp" />
      <Route path="/login" page={LoginPage} name="login" />
      <Private unauthenticated="login">
        <Route path="/profile/{id:Int}" page={ProfilePage} name="profile" />
        <Route path="/" page={HomePage} name="home" />
        <Route path="/contracts" page={ContractsPage} name="contracts" />
        <Route path="/contract/{id:Int}" page={ContractPage} name="contract" />
        <Route path="/contract-setup" page={ContractSetupPage} name="contractSetup" />
        <Route path="/contract-setup/categories" page={ContractSetupPage} name="categories" />
        <Route path="/contract-setup/categories/new" page={ContractSetupPage} name="categoryNew" />
        <Route path="/contract-setup/categories/edit/{categoryId:Int}" page={ContractSetupPage} name="categoryEdit" />
        <Route path="/contract-setup/make" page={ContractSetupPage} name="contractGeneratorMake" />
        <Route path="/contract-setup/make/{makeName:String}/models" page={ContractSetupPage} name="contractGeneratorModels" />
        <Route path="/contract-setup/make/{makeName:String}/models/{modelName:String}" page={ContractSetupPage} name="contractGeneratorModel" />
        <Route path="/contract-setup/account" page={ContractSetupPage} name="contractGeneratorAccount" />
        <Route path="/contract-setup/contracts" page={ContractSetupPage} name="contractGeneratorContract" />
        <Route path="/contract-setup/contracts/new" page={ContractSetupPage} name="contractGeneratorContractNew" />
        <Route path="/contract-setup/toc/new" page={ContractSetupPage} name="contractGeneratorTocNew" />

        {/* admin routes  */}
        <Route path="/admin/makes/new" page={AdminMakePage} name="newMake" />
        <Route path="/admin/makes/{id:Int}/edit" page={AdminEditMakePage} name="editMake" />
        <Route path="/admin/makes/{id:Int}" page={AdminMakePage} name="make" />
        <Route path="/admin/makes" page={AdminMakesPage} name="makes" />

      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
