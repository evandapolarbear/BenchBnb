export const signUp = (form, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/users',
    data: {user: {username: form.username, password: form.password}},
    success:success,
    error:error
  });
};

export const logIn = (form, success, error) => {
  $.ajax({
    type: 'POST',
    url: 'api/sessions',
    data: {user: {username: form.username, password: form.password}},
    success,
    error
  });
};

export const logOut = (success, errors) => {
  $.ajax({
    type: 'DELETE',
    url: 'api/sessions/',
    success,
    errors
  });
};
