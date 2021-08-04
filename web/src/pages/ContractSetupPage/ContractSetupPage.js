import MainLayout from 'src/layouts/MainLayout/MainLayout'
import ContractGenerator from 'src/components/ContractGenerator/ContractGenerator'
import MakesCell from 'src/components/setup/Makes/MakesCell/MakesCell'
import ModelsCell from 'src/components/setup/Makes/ModelsCell/ModelsCell'
import ModelCell from 'src/components/setup/Makes/ModelCell/ModelCell'
import CategoriesCell from 'src/components/setup/Categories/CategoriesCell/CategoriesCell'
import NewCategory from 'src/components/setup/Categories/NewCategory/NewCategory'
import CategoryCell from 'src/components/setup/Categories/CategoryCell/CategoryCell'
import ContractsCell from 'src/components/setup/Contracts/ContractsCell/ContractsCell'
import ContractNew from 'src/components/setup/Contracts/ContractNew/ContractNew'
import TermsCell from 'src/components/setup/Terms/TermsCell/TermsCell'
import TermNew from 'src/components/setup/Terms/TermNew/Term'
import TermCell from 'src/components/setup/Terms/TermCell/TermCell'
import ContractBasicInfoCell from 'src/components/setup/Contracts/ContractBasicInfoCell/ContractBasicInfoCell'
import PricingStructureCell from 'src/components/setup/Contracts/PricingStructureCell/PricingStructureCell'

import { CogIcon, KeyIcon, UserCircleIcon } from '@heroicons/react/outline'
import { useLocation, useParams } from '@redwoodjs/router'

const subNavigation = [
  {
    name: 'Contract Categories',
    href: '/contract-setup/categories',
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: 'Makes and Models',
    href: '/contract-setup/make',
    icon: UserCircleIcon,
    current: false,
  },
  {
    name: 'Contracts',
    href: '/contract-setup/contracts',
    icon: CogIcon,
    current: false,
  },
  {
    name: 'Terms and Conditions',
    href: '/contract-setup/terms',
    icon: KeyIcon,
    current: false,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContractSetupPage = ({ categoryId }) => {
  const { pathname } = useLocation()
  const { makeName, modelName, termId, contractId } = useParams()

  let CurrentForm, currentFormName, params
  switch (true) {
    case /^\/contract-setup\/categories$/.test(pathname):
      CurrentForm = CategoriesCell
      currentFormName = 'Contract Categories'
      break
    case /^\/contract-setup\/make$/.test(pathname):
      CurrentForm = MakesCell
      currentFormName = 'Makes and Models'
      break
    case /^\/contract-setup\/make\/.*\/models\/.*$/.test(pathname):
      CurrentForm = ModelCell
      currentFormName = 'Makes and Models'
      params = { input: { makeName, name: modelName } }
      break
    case /^\/contract-setup\/make\/.*\/models$/.test(pathname):
      CurrentForm = ModelsCell
      currentFormName = 'Makes and Models'
      params = { input: { makeName } }
      break
    case /^\/contract-setup\/contracts$/.test(pathname):
      CurrentForm = ContractsCell
      currentFormName = 'Contracts'
      break
    case /^\/contract-setup\/contracts\/new$/.test(pathname):
      CurrentForm = ContractNew
      currentFormName = 'Contracts'
      break
    case /^\/contract-setup\/contracts\/.*\/basic_info$/.test(pathname):
      CurrentForm = ContractBasicInfoCell
      currentFormName = 'Contracts'
      params = { contractId }
      break
    case /^\/contract-setup\/contracts\/.*\/pricing_structure$/.test(pathname):
      CurrentForm = PricingStructureCell
      currentFormName = 'Contracts'
      params = { contractId }
      break
    case /^\/contract-setup\/categories\/new$/.test(pathname):
      CurrentForm = NewCategory
      currentFormName = 'Contract Categories'
      break
    case /^\/contract-setup\/categories\/.*\/edit$/.test(pathname):
      CurrentForm = CategoryCell
      currentFormName = 'Contract Categories'
      params = { categoryId: categoryId }
      break
    case /^\/contract-setup\/terms$/.test(pathname):
      CurrentForm = TermsCell
      currentFormName = 'Terms and Conditions'
      break
    case /^\/contract-setup\/terms\/new$/.test(pathname):
      CurrentForm = TermNew
      currentFormName = 'Terms and Conditions'
      break
    case /^\/contract-setup\/terms\/.*\/edit$/.test(pathname):
      CurrentForm = TermCell
      currentFormName = 'Terms and Conditions'
      params = { termId: termId }
      break
    default:
      CurrentForm = ContractGenerator
  }

  subNavigation.forEach((navItem, idx) => {
    if (navItem.name === currentFormName) {
      subNavigation[idx].current = true
    } else {
      subNavigation[idx].current = false
    }
  })

  return (
    <MainLayout>
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
          <div className="bg-white rounded-lg shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <aside className="py-6 lg:col-span-3">
                <nav className="space-y-1">
                  {subNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-teal-50 border-teal-500 text-teal-700 hover:bg-teal-50 hover:text-teal-700'
                          : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                        'group border-l-4 px-3 py-2 flex items-center text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-teal-500 group-hover:text-teal-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </nav>
              </aside>
              <CurrentForm {...params} />
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default ContractSetupPage
