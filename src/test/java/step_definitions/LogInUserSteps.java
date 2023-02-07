package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.LogInPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class LogInUserSteps {
    private WebDriver webDriver;

    public LogInUserSteps(){
        super();
        this.webDriver =Hooks.webDriver;
    }

    @Given("User open the campyuk website")
    public void verifyDisplay(){
        LogInPage loginPage = new LogInPage(webDriver);
        loginPage.getHeader();
        loginPage.clickLoginLandingPage();
    }
//    @And("User click login button")
//    public void firstLoginButton(){
//        LogInPage loginPage = new LogInPage(webDriver);
//        loginPage.clickLoginLandingPage();
//    }

    @When("User input \"(.*)\" as userName and input \"(.*)\" as password")
    public void inputCredential(String userName, String password) throws InterruptedException {
        LogInPage loginPage = new LogInPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();
        Thread.sleep(6000);

    }
    @Then("User should directed into next page")
    public void verifyDisplay1(){
        LogInPage loginPage = new LogInPage(webDriver);
        loginPage.getHeader2();
        loginPage.clickOk();
    }
    @Then("User see error \"(.*)\" on login page")
    public void errorText(String errorText) throws InterruptedException {
        LogInPage loginpage = new LogInPage(webDriver);
        Assert.assertEquals(errorText, loginpage.getErrorText());
        Thread.sleep(3000);
        loginpage.clickOkErrorMessage();

    }


}
