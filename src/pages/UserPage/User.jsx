import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { userStatus } from '../../services/userStatus';
import { IoIosArrowBack } from 'react-icons/io';
import MetricCard from './../../components/MetricCard/MetricCard';
import { useNavigate } from 'react-router-dom';
import AboutUser from './../../components/AboutUser/AboutUser';
import Header from './../../components/loyaut/Header/Header';
import EventCard from '../../components/EventCard/EventCard';
import { getUserEvents } from '../../services/registrationService';

const User = () => {
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (!user?.id) {
      alert('Перезайдите в аккаунт <3');
    }

    if (!token) navigate('/login');

    const fetchData = async () => {
      try {
        const data = await userStatus(user.id);
        const events = await getUserEvents(user.id);
        setEvents(events);
        setStats(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [user.id]);

  const loadEvents = async () => {
    setLoading(true);
    await getUserEvents()
      .then(data => setEvents(data))
      .finally(() => setLoading(false));
  };

  if (!stats || loading) return <p>Loading...</p>;

  return (
    <div className={styles.userPage}>
      <Header />
      <div className={styles.wrapper}>
        <span className="back" onClick={() => navigate('/')}>
          <IoIosArrowBack size={24} color="#a92225" />
          Back to Home
        </span>
        <AboutUser
          name={user.first_name}
          surname={user.last_name}
          email={user.email}
        />
        <div className={styles.list}>
          <MetricCard
            label="Upcoming Events"
            value={stats ? stats.upcomingEvents : 0}
            icon={'/assets/upcoming.png'}
            colorClass="red"
            v_color="value_red"
          />
          <MetricCard
            label="Upcoming Events"
            value={stats ? stats.attendedEvents : 0}
            icon={'/assets/attend.png'}
            colorClass="green"
            v_color="value_green"
          />
          <MetricCard
            label="Upcoming Events"
            value={stats ? stats.totalSpent : 0}
            icon={'/assets/total.png'}
            colorClass="blue"
            v_color="value_blue"
          />
        </div>

        <div className={styles.upcomning}>
          <h3 className={styles.title}>Upcomming Events</h3>

          <div className={styles.listEvents}>
            {events.length !== 0 ? (
              events.map(event => (
                <EventCard
                  loadEvents={loadEvents}
                  key={event.id}
                  event={event}
                  userEvent={true}
                />
              ))
            ) : (
              <div>
                <p className={styles.empty}>
                  Вы не зареганы на ни одно мероприятие :(
                </p>
                <a href="/">Посмотреть мероприятия</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
