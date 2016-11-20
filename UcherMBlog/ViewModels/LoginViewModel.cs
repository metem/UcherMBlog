using System.ComponentModel.DataAnnotations;

namespace UcherMBlog.ViewModels
{
    public class LoginViewModel
    {
        [Required]
        public string Login { get; set; }

        [Required]
        public string Password { get; set; }
    }
}