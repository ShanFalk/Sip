import Cookies from 'js-cookie';

export const csrfFetch = async (url, options = {}) => {
    options.method = options.method || 'GET';
    options.headers = options.headers || {};

    console.log('Are we in the csrfFetch?')
    console.log(url, options);

    if (options.method.toUpperCase() !== 'GET') {
        options.headers['Content-Type'] =
        options.headers['Content-Type'] || 'application/json';
        options.headers['XSRF-Token'] = Cookies.get('XSRF-TOKEN');
    }
    const res = await window.fetch(url, options);

    console.log('This is the response from fetch', res)

    if (res.status >= 400) throw res;

    return res;
}

//call this to get the XSRF-TOKEN from the backend in dev
export const restoreCSRF = () => csrfFetch('/api/csrf/restore');
