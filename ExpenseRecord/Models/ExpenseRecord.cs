namespace ExpenseRecord.Models
{
    public class ExpenseRecord
    {
        [BsonId]
        public string Id { get; set; } = Guid.NewGuid().ToString();

        public string Description { get; set; } = string.Empty;

        public string Type { get; set; }

        public int Amount { get; set; }

        public string Date { get; set; }

    }
}