const AUTH_URL = 'http://localhost:8181/api/auth';

const authenticate = async (email, password) => {
  const url = AUTH_URL + '/signin';
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const result = await res.json();
  console.log('로그인 결과: ', result);

  return result.token;
};

// 이름을 다르게 해서 임포트 하고싶을때
export function login(email, password) {
  return authenticate(email, password);
}

// export default authenticate;
