export const requestPlans = async (currency) => {
    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json;charset=utf-8');
    myHeaders.append('x-pm-appversion', 'Other');
    // myHeaders.append('x-pm-apiversion', '3');
    myHeaders.append('Accept', 'application/vnd.protonmail.v1+json');

    const myInit = {
      method: 'GET',
      headers: myHeaders,
      mode: 'cors',
      cache: 'default'
    };

    const response = await fetch(`https://api.protonmail.ch/payments/plans?Currency=${currency ? currency : 'EUR'}`, myInit)
    const result = await response.json();

    return result.Plans;
  };