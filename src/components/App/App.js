import PostList from "../PostList/PostList";

export default function App() {
  return (
    <div className="ui container">
      <PostList/>
    </div>
  )
}

/* Ways to write function and pass it as value

write a function outta constructor and save to property where the value should've bind method or,
There's no need for constructor even if the component recives props; it can just be accessd with this.props and then
write the function and simply call that as the value of required event (or if none that then direcylt use arrow function and
return a value so that it can be called elsewhere winthin the component )

*/
