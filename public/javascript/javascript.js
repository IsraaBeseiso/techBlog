//add and post
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('input[name="content"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
};

// add comment

async function commentFormHandler(event) {
  event.preventDefault();

  const comment_text = document.querySelector('input[name="comment-body"]').value.trim();

  const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];

  if (comment_text) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
              post_id,
              comment_text
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
          document.location.reload();

      } else {
          alert(response.statusText);
          document.querySelector('#comment-form').style.display = "block";
      }
  }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

//delete post

async function deleteFormHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
    
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);

//edit post

async function editFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const content = document.querySelector('input[name="content"]').value.trim();
  console.log(title);
  console.log(content);

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
    
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_id: id,
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }

}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);



//  login submission 


async function loginFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        username,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}


document.querySelector('#login-form').addEventListener('submit', loginFormHandler);


//logout submission 

async function logout() {
  const response = await fetch('/api/users/logout', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#logout').addEventListener('click', logout);


//signup submission


async function signupFormHandler(event) {
  event.preventDefault();


  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
      const response = await fetch('/api/users', {
          method: 'POST',
          body: JSON.stringify({
              username,
              password
          }),
          headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
          console.log('success');


          document.location.replace('/dashboard');

      } else {
          alert(response.statusText);
      }
  }
}

document.querySelector('#signup-form').addEventListener('submit', signupFormHandler);