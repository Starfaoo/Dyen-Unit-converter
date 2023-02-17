import {Text} from "./text";
import {Input} from "./input.jsx";


function App() {
  
  const flex = (alignItems, justifyContent, flexDirection) => {
    return { display: "flex", alignItems, justifyContent, flexDirection };
  };



  return (
    <main
      style={{
        height: "100vh",
      }}
    >
      <nav
        style={{
          ...flex("center", "space-between"),
          height: "8vh",
          width: "100%",
          padding: " 0 16px",
        }}
      >
        <p>dyenCal</p>
        <p>burger</p>
      </nav>
      
       <div>
            <Input />
      </div>

      <footer
        style={{
          height: "8vh",
        }}
      >
        <Text type= "h3">
          &copy; DYEN Cohort-5
        </Text>
      </footer>
    </main>
  );
}

export default App;
