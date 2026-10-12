import '../App.css'

export function Layout({ children }) {
  return (
    <div className="app">
      <a className="skip" href="#contenu">
        Aller au contenu
      </a>
      {children}
    </div>
  )
}

