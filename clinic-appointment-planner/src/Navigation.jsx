export default function Navigation() {

  return (
    <nav
      style={{
        padding: '16px 0',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          maxWidth: '1126px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <img
            src="/logo-pictures/miniLogo.jpg"
            alt="clinic logo"
            width="40"
            height="40"
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: '500',
              color: 'var(--text-h)',
            }}
          >
            Clinic Planner
          </span>
        </div>

        <ul
          style={{
            display: 'flex',
            gap: '32px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            alignItems: 'center',
          }}
        >
          <li>
            <a
              href="#appointments"
              style={{
                textDecoration: 'none',
                color: 'var(--text)',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.3s',
                position: 'relative',
              }}
            >
              Appointments
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '5px',
                  background: 'var(--accent)',
                  transition: 'width 0.3s',
                }}
              />
            </a>
          </li>
          <li>
            <a
              href="#calendar"
              style={{
                textDecoration: 'none',
                color: 'var(--text)',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.3s',
                position: 'relative',
              }}
            >
              Calendar
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'var(--accent)',
                  transition: 'width 0.3s',
                }}
              />
            </a>
          </li>
          <li>
            <a
              href="#patients"
              style={{
                textDecoration: 'none',
                color: 'var(--text)',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'color 0.3s',
                position: 'relative',
              }}
            >
              Patients
              <span
                style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: 'var(--accent)',
                  transition: 'width 0.3s',
                }}
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}