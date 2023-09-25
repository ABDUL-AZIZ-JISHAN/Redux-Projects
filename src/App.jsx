import Header from "./component/header";
import InputData from "./component/inputData";
import PreviewData from "./component/previewData";
import store from "./redux/store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <Header />
      <section>
        <InputData />
        <PreviewData />
      </section>
    </Provider>
  );
}

export default App;
