export default function handleSessionAuth(navigate, homePage=false) {
    const token = localStorage.getItem('jwtToken');
    if (!token && !homePage) {
        navigate('/');
    }
    else if (token && homePage) {
        navigate('/products/all');
    }
}