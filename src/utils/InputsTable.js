import React from 'react';

const InputsTable = () => {
    return (
        <table>

            <tr>
                <td>
                <label for="fname">First Name</label>
                </td>
                <td>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." required />
                </td>
            </tr>

            <tr>
                <td>
        
                <label for="lname">Last Name</label>
                </td>
                <td>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
        
                </td>
            </tr>

            <tr>
                <td>
                <label for="contactNumber">Contact Number</label>
                </td>
                <td>
                <input type="number" id="contactNumber" name="contactNumber" placeholder="Will ping you there" required />
                </td>
            </tr>

            <tr>
                <td>
                <label for="email">Email</label>
                </td>
                <td>
                <input type="email" id="email" name="emailAddress" placeholder="Your email details" required />
                </td>
            </tr>
            
            <tr>
                <td>
                <label for="subject">Subject</label>
                </td>
                <td>
                <input type="text" id="subject" name="subject" placeholder="Write something... " />
                </td>
            </tr>

            <tr>
                <td></td>
                <td>
                <input type="submit" value="Submit" class="submit" onClick={() => alert("Your Details are Submitted")}/>
                <input type="reset" value="Reset" class="reset" />
                </td>
            </tr>
            </table>
    )
}

export default InputsTable;