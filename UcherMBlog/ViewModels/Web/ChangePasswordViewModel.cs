using System.ComponentModel;

namespace UcherMBlog.ViewModels.Web
{
    public class ChangePasswordViewModel
    {
        [DisplayName("Current password")]
        public string CurrentPassword { get; set; }

        [DisplayName("New password")]
        public string NewPassword { get; set; }
    }
}