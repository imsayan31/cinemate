import { screen } from "@testing-library/dom";
import ToDo from "./ToDo";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";

test('should create component', () => {
    render(
        <Provider store={store}>
            <ToDo />
        </Provider>
    );
    const headingElement = screen.getByTestId('ToDo List');
    expect(headingElement).toBeInTheDocument();
});

