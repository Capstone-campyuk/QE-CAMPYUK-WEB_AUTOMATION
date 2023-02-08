package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.LogInPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class LoginHostSteps {
    private WebDriver webDriver;

    public LoginHostSteps(){
        super();
        this.webDriver =Hooks.webDriver;
    }
    @Given("Host open the campyuk website")
    public void verifyDisplay(){
        LogInPage loginPage = new LogInPage(webDriver);
        loginPage.getHeader();
        loginPage.clickLoginLandingPage();
    }

    @When("Host input \"(.*)\" as userName and input \"(.*)\" as password")
    public void inputCredential(String userName, String password) throws InterruptedException {
        LogInPage loginPage = new LogInPage(webDriver);
        loginPage.setUserName(userName);
        loginPage.setPassword(password);
        loginPage.clickLogin();
        Thread.sleep(6000);

    }

    @Then("Host should directed into next page")
    public void verifyDisplayHost(){
        LogInPage loginPage = new LogInPage(webDriver);
        loginPage.getHeaderHost();
        loginPage.clickOkHost();
    }
    @Then("Host see error \"(.*)\" on login page")
    public void errorText(String errorText) throws InterruptedException {
        LogInPage loginpage = new LogInPage(webDriver);
        Assert.assertEquals(errorText, loginpage.getErrorText());
        Thread.sleep(5000);
        loginpage.clickOkErrorMessage();

    }



}
