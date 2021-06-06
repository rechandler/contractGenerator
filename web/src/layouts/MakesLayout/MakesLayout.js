import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

const MakesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <Toaster />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.makes()} className="rw-link">
            Makes
          </Link>
        </h1>
        <Link to={routes.newMake()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Make
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default MakesLayout
