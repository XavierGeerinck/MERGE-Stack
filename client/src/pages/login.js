import Login from '../components/smart/Login'
import Header from '../components/smart/Header'
import withData from '../lib/withData'

export default withData(() => (
    <div>
        <Header />
        <Login />
    </div>
));