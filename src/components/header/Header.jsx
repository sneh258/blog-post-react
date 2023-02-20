import './header.css'

export default function header() {
  return (
    <div>
      <div className="header">
        <div>
          <h2>The Artifact</h2>
        </div>
        <div>
          <h3>
            <em>Culture & Art blog</em>
          </h3>
        </div>
        <div className="nav">
          <ul className="list">
            <li id="l1">Blog</li>
            <li id="l1">About</li>
            <li id="l1">Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
