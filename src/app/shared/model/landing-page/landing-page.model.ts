
export interface LandingPageFieldObj {
        ID: Number;
        LabelText: string;
        TextRequired: string;
        TextFormatError: string;
        Url: string;
}

export interface LandingPageModel {
    LoginUserName: LandingPageFieldObj;
    LoginPassword: LandingPageFieldObj;
    LoginButton: LandingPageFieldObj;
    ForgetPassword: LandingPageFieldObj;
    ContactUs: LandingPageFieldObj;
    VersionNumber: LandingPageFieldObj;
    PrivatePolicy: LandingPageFieldObj;
}
