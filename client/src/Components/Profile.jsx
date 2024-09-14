import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// Define the Checkout component
export default function Profile() {

  const navigate = useNavigate();
  const handleSave = (event) => {
    event.preventDefault();

    // Retrieve values from input fields and select options
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const country = document.getElementById("country").value;
    const gender = document.getElementById("gender").value;

    // Create an object with personal information
    const personalInfo = {
      firstName,
      lastName,
      email,
      country,
      gender,
    };

    // Save the personal information in sessionStorage
    sessionStorage.setItem("personalInfo", JSON.stringify(personalInfo));

    // You can add additional logic here, such as displaying a success message.
    toast.success("User Info Saved ");
    navigate('/Home');
  };
  return (
    <div>
      <form>
        <div>
          {/* Personal Information Section */}
          <div className="ml-[15%] bg-white border border-rounded-lg p-0 m-3 mt-[7%] w-[70%]  border-hidden border-shadow-md ">
            <div className="border-b border-gray-900/10 p-[6%]   ">
              <h1 className="text-2xl font-semibold leading-7 text-gray-900">
                Personal Information
              </h1>

              {/* Form fields for personal information */}
              <div className="mt-10  gap-x-6 gap-y-8 sm:grid-cols-6 ">
                {/* First Name */}
                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name
                  </label>
                  <div className="mt-2 w-[38.5%]">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Last Name */}
                <div className="sm:col-span-3 mt-4  ">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2 w-[38.5%]">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Email Address */}
                <div className="sm:col-span-4 mt-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2 w-[38.5%]">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 pl-[14px] focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Country */}
                <div className="sm:col-span-3 mt-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2 ">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>India</option>
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
                <br></br>
                {/* Gender */}
                <div className="sm:col-span-3 ">
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Gender
                  </label>
                  <div className="mt-2 ">
                    <select
                      id="gender"
                      name="gender"
                      autoComplete="gender"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Others</option>
                    </select>
                  </div>
                </div>
                <br></br>
                {/* Save Button */}
                <div className="sm:col-span-full flex justify-center mt-4">
                  <button
                    type="submit"
                    className="block w-[38.5%] px-4 py-2 ml-[-62%] mb-16 font-semibold text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                    onClick={handleSave}

                 >
                    Save
                  </button>
                </div>
                {/* ----------------------- */}
                <div className="lg:col-span-12 ">
                  <div className="font-bold mb-4">FAQs</div>
                  <div className="w-full">
                    <h4
                      className="text-md font-semibold mb-2"
                      id="update-email-mobile"
                    >
                      What happens when I update my email address (or mobile
                      number)?
                    </h4>
                    <p className="mb-4">
                      Your login email id (or mobile number) changes, likewise.
                      You'll receive all your account related communication on
                      your updated email address (or mobile number).
                    </p>
                    <h4
                      className="text-md font-semibold mb-2"
                      id="update-timing"
                    >
                      When will my Flipkart account be updated with the new
                      email address (or mobile number)?
                    </h4>
                    <p className="mb-4">
                      It happens as soon as you confirm the verification code
                      sent to your email (or mobile) and save the changes.
                    </p>
                    <h4
                      className="text-md font-semibold mb-2"
                      id="account-update"
                    >
                      What happens to my existing Flipkart account when I update
                      my email address (or mobile number)?
                    </h4>
                    <p className="mb-4">
                      Updating your email address (or mobile number) doesn't
                      invalidate your account. Your account remains fully
                      functional. You'll continue seeing your Order history,
                      saved information and personal details.
                    </p>
                    <h4
                      className="text-md font-semibold mb-2"
                      id="seller-account"
                    >
                      Does my Seller account get affected when I update my email
                      address?
                    </h4>
                    <p>
                      Flipkart has a 'single sign-on' policy. Any changes will
                      reflect in your Seller account also.
                    </p>
                  </div>
                </div>

                {/* ----------------- */}
              </div>
            </div>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
              alt="Your Alt Text"
              className="w-[150%] "
              style={{ verticalAlign: "middle" }}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
