// Write your code here!
        async function fetchAndDisplayPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const posts = await response.json();
                displayPosts(posts);
            } catch (error) {
                const postList = document.querySelector('#post-list');
                const errorMessage = document.createElement('li');
                errorMessage.textContent = 'Failed to load posts. Please try again later.';
                postList.appendChild(errorMessage);
                console.error('Error fetching posts:', error);
            }
        }
        
        function displayPosts(posts) {
            const postList = document.querySelector('#post-list');
            postList.innerHTML = ""; // Clear previous posts
        
            posts.forEach(post => {
                const listItem = document.createElement('li');
        
                const title = document.createElement("h1");
                title.textContent = post.title;
        
                const body = document.createElement('p');
                body.textContent = post.body;
        
                listItem.appendChild(title);
                listItem.appendChild(body);
        
                postList.appendChild(listItem);
            });
        }
        
        // Call the function
        fetchAndDisplayPosts();

