using System.ComponentModel.DataAnnotations;
namespace ExpenseRecord.Models
{
    public class ExpenseRecordClass
    {
        public string Id { get; set; } 
        public string Description { get; set; }

        public string Type { get; set; }

        public int Amount { get; set; }

        public string Date { get; set; }

    }
}