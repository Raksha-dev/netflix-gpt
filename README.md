Netfilx GPT implementation

Create react app
configure tailwind
routing configuration
header
login form
Sign up form
form validation
useRef hook
Firebase setup
deploying our app to production
Implement sign up/sign in user account
Created redux store withs user slice
Implemented signout
update profile api call
bugfix: sign up use displayName and profile picture
bugfix: if the user is not logged in redirect user to login page if he hit /browse and vice-versa
Unsubscribe when the component is unmount, since it was getting called every time when the header was loaded every time- return () => unSubscribe();
all the hard coded urls moved to constants file
registered to TMDB got access token
used Movie list api to fetch the upcoming movies
used video id to get the trailer
created a custom hooks to use api 
update store trailer with video data
embed the youtube video and make it autoplay and mute
used tailwind to make main container.
Built secondaty container where we can browse popuper/upcoming and other types of movies.
built GPT Search page skeloton
** Search page is multilingual
get Open ai key 
get search tmdb key
reused movie list to show searched movies
Memoization to stop making api calls again n again
added .env file for security issues
added .env file to add git ignore



