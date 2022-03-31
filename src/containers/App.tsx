import TeamsAnalytics from 'pages/analytics/teams';
import { Provider } from 'react-redux';
import store from 'redux/store';
import 'styles/main.scss';

const App = () => (
  <Provider store={store}>
    <TeamsAnalytics />
  </Provider>
);

export default App;
