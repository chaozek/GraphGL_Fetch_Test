import { createGlobalStyle } from "styled-components";
export const theme = {
  color: {
    darkGray: "#121212",
    white: "white",
  },
};

export const GlobalStyles = createGlobalStyle`
input {
  all: unset;
}
  body {
    -webkit-appearance:none;
    background-image: url("https://returnyoutubedislike.com/ui/abstract.svg");
    background-position: top right;
    background-repeat: no-repeat;
    background-size: 100%;
    background-color: #121212;
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: 'Rubik', sans-serif;
    background-color: ${theme.color.gray};
    color:white
;
html{
  background-color: ${theme.color.gray};
  -webkit-appearance:none;

  box-sizing: border-box; 
  margin: 0;
    padding: 0;
}
  }
a{
  text-decoration: none !important;

}
  ul{
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  }


input:focus,textarea:focus {
    outline : none ;
}
input::-ms-clear {
    display : none ;
}
textarea {
    resize: none ;
    font-size:16px;
}
select{
  -webkit-appearance:none;
}
option{
  -webkit-appearance:none;
}
button{
  -webkit-appearance: none;
-moz-appearance: none;
appearance: none;
}
input{
  font-size: 16px;
  -webkit-appearance:none;
  padding: 10px;
}
input[type="date"]::-webkit-datetime-edit-text,
input[type="date"]::-webkit-datetime-edit-month-field,
input[type="date"]::-webkit-datetime-edit-day-field,
input[type="date"]::-webkit-datetime-edit-year-field {
  color: ${theme.color.gray};
}
input[type="date"].date-input--has-value::-webkit-datetime-edit-text,
input[type="date"].date-input--has-value::-webkit-datetime-edit-month-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-day-field,
input[type="date"].date-input--has-value::-webkit-datetime-edit-year-field {
}
input[type=checkbox] {
  -webkit-appearance: none;
  -moz-appearance:    none;
  appearance:         none;
}

input[type="radio"]{
    -webkit-appearance: radio !important;
    padding: 0
}


`;
