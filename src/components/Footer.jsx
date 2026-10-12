export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-text">© {year} Thibault Charron.</div>
    </footer>
  )
}
