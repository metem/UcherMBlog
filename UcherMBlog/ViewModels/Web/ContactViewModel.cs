using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace UcherMBlog.ViewModels.Web
{
    public class ContactViewModel
    {
        [Required]
        public string Title { get; set; }

        [Required]
        [EmailAddress]
        [DisplayName("E-mail")]
        public string Email { get; set; }

        [Required]
        public string Message { get; set; }
    }
}