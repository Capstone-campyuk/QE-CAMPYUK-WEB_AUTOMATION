package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.RegisterPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class RegisterUserSteps {
    private WebDriver webDriver;

    public RegisterUserSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Given("guest already at campyuk website and has not registered yet")
    public void verifyUserOnLandingPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.landingPageIsDisplayed();
    }

    @And("guest click login button on landing page")
    public void userClickBtnLoginOnLandingPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickLogin();
    }
    @And("guest click register button on Login page")
    public void guestClickBtnRegisterOnLoginPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickRegister();
    }

    @When("guest choose register as Guest")
    public void selectRoleRegisterUser() throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        String a = "Guest";
        registerPage.selectBtnRoleRegister(a);
        Thread.sleep(2000);
    }

    @And("guest input field username \"(.*)\", full name \"(.*)\", Email \"(.*)\", and Password \"(.*)\"")
    public void inputCredentialGuest(String username, String fullname, String email, String password) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setUserName(username);
        registerPage.setFullName(fullname);
        registerPage.setEmail(email);
        registerPage.setPassword(password);
        registerPage.clickRegister();
        Thread.sleep(4000);
    }

    @Then("guest should see an pop up message \"(.*)\"")
    public void guestVerifyPopUpMessage(String message) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        Assert.assertEquals(message, registerPage.getPopUpMessage());
        Thread.sleep(2000);
    }
}
