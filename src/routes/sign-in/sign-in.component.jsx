import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
    auth,
    signInWithGooglePopup,
    createuserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils";



const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createuserDocumentFromAuth(user);
    };

    return (
        <section>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <SignUpForm />
        </section>
    );
}
 
export default SignIn;