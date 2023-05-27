export default function handleSessionAuth(navigate) {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
        navigate('/');
    }
}