package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.RegisterPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class RegisterHostSteps {
    private WebDriver webDriver;

    public RegisterHostSteps(){
        super();
        this.webDriver = Hooks.webDriver;
    }
    @Given("host already at campyuk website")
    public void verifyLandingPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.landingPageIsDisplayed();

    }

    @And("host click login button on landing page")
    public void verifyBtnLoginOnLandingPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickLogin();
    }

    @And("host click register button on Login page")
    public void verifyBtnRegisterOnLoginPage() {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickRegister();
    }

    @And("host directed into Register page")
    public void verifyRegisterPage() throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        Assert.assertTrue(registerPage.registerPageIsDisplayed());
        Thread.sleep(2000);
    }

    @When("I choose register as Host")
    public void selectRoleRegister() throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        String a = "Host";
        registerPage.selectBtnRoleRegister(a);
        Thread.sleep(2000);
    }

    @And("I enter \"(.*)\" as Username, \"(.*)\" as Full Name, \"(.*)\" as Email, and \"(.*)\" as Password")
    public void inputCredential(String username, String fullname, String email, String password) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.setUserName(username);
        registerPage.setFullName(fullname);
        registerPage.setEmail(email);
        registerPage.setPassword(password);
        registerPage.clickRegister();
        Thread.sleep(4000);

    }

    @Then("I should see an pop up message \"(.*)\"")
    public void verifyPopUpMessage(String message) throws InterruptedException {
        RegisterPage registerPage = new RegisterPage(webDriver);
        Assert.assertEquals(message, registerPage.getPopUpMessage());
        Thread.sleep(2000);
    }

    @And("click OK button on pop up")
    public void verifyBtnPopUp(){
        RegisterPage registerPage = new RegisterPage(webDriver);
        registerPage.clickBtnPopUp();
    }
}
