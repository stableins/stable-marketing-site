export function getRegistrationRoute(userType) {
    if(userType === 'Rideshare Owner Operator') {
        return '/rideshare-signup/'
    } else {
        return '/join-stable/'
    }
}