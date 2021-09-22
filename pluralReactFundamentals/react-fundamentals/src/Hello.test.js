import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow }  from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
// import moment from 'moment';

describe("When setting up testing",()=> {
    it("should paass", ()=> {
        expect(1+1).toBe(2);
    });
})

function Hello(props){
    return <h1>Hello at {props.now}</h1>
}

describe("When testing directly",()=> {

    beforeAll(()=> {
        result= Hello({now: moment.toISOString()});
    });

    it("return a value", ()=> {
        expect(result).not.toBeNull();
    });

    it("is a h1", ()=> {
        expect(result.type).toBe("h1");
    });

    it("has children", ()=> {
        expect(result.props.children).toBeTruthy();
    });

})

describe("When testing with ReactDOM", ()=>{
    it("renders without crashing",()=>{
        const div = document.createElement("div");
        ReactDOM.render(<Hello now={moment.toISOString()}/>,div);
    });
});

Enzyme.configure({ adapter: new Adapter() });

describe("when Testing with Enzyme", () => {
    it("renders a hi", () => {
        const wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.find("h1").length).toBe(1);
    });

    it("contains Hello at 202-05-08T14:00:00.000Z", () =>{
        const wrapper = shallow(<Hello now={moment.toISOString()} />);
        expect(wrapper.contains(<h1>Hello at 202-05-08T14:00:00.000Z</h1>)).toBe(true);
    });
});
