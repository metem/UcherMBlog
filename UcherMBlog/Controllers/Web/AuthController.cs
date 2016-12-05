using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using NUglify.Helpers;
using UcherMBlog.Models;
using UcherMBlog.ViewModels.Web;

namespace UcherMBlog.Controllers.Web
{
    public class AuthController : Controller
    {
        private readonly SignInManager<BlogUser> _signInManager;
        private readonly UserManager<BlogUser> _userManager;

        public AuthController(SignInManager<BlogUser> signInManager, UserManager<BlogUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [Authorize]
        public IActionResult ChangePassword()
        {
            return View();
        }

        [HttpPost]
        [Authorize]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> ChangePassword(ChangePasswordViewModel changePasswordViewModel)
        {
            if (ModelState.IsValid)
            {
                var blogUser = await _userManager.GetUserAsync(HttpContext.User);
                var result = await _userManager.ChangePasswordAsync(blogUser, changePasswordViewModel.CurrentPassword,
                    changePasswordViewModel.NewPassword);

                if (!result.Succeeded)
                {
                    ModelState.AddModelError(string.Empty, "Incorrect password.");
                }
            }

            return View();
        }

        public IActionResult Login(string returnUrl)
        {
            if (User.Identity.IsAuthenticated)
            {
                if (returnUrl.IsNullOrWhiteSpace())
                {
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    Redirect(returnUrl);
                }
            }

            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel loginViewModel, string returnUrl)
        {
            if (ModelState.IsValid)
            {
                var result =
                    await _signInManager.PasswordSignInAsync(loginViewModel.Login, loginViewModel.Password, true,
                        false);


                if (result.Succeeded)
                {
                    if (returnUrl.IsNullOrWhiteSpace())
                    {
                        return RedirectToAction("Index", "Home");
                    }
                    else
                    {
                        Redirect(returnUrl);
                    }
                }
                else
                {
                    ModelState.AddModelError(string.Empty, "Incorrect user name or password.");
                }
            }

            return View();
        }

        public async Task<IActionResult> Logout()
        {
            if (User.Identity.IsAuthenticated)
            {
                await _signInManager.SignOutAsync();
            }

            return RedirectToAction("Index", "Home");
        }
    }
}
