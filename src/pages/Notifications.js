import {useState} from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);


  return (
    <main>
      {!showNotifications &&
        (
          <div className="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" role="status">
              <span class="visually-hidden">Carregando...</span>
            </div>
          </div>
        )
      }
      {showNotifications &&
        (
          <>
            <h1>Minhas notificações</h1>
            <p>Lista de notificações do GitHub</p>
          </>
        )
      }
    </main>
  )
}

export default Notifications;
