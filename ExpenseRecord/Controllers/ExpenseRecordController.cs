using Microsoft.AspNetCore.Mvc;
using ExpenseRecord.Models;
using Microsoft.Extensions.Logging;

namespace ExpenseRecord.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExpenseRecordController : ControllerBase
    {
        private static readonly List<ExpenseRecordClass> _expenseRecords = new List<ExpenseRecordClass>();
        ExpenseRecordClass exampleRecord = new ExpenseRecordClass();

        public static int idCounter = 0;

        public ExpenseRecordController()
        {

        }

        [HttpGet]
        public List<ExpenseRecordClass> Get()
        {
            return _expenseRecords;
        }

        [HttpGet("{Id}")]
        public ActionResult<ExpenseRecordClass> Get(string Id)
        {
            var expenseRecord = _expenseRecords.Find(x => x.Id == Id);
            if (expenseRecord == null) { return NotFound(); }
            return expenseRecord;
        }

        [HttpPost]
        public ActionResult Post(ExpenseRecordClass expenseRecord)
        {
            idCounter++;
            expenseRecord.Id = idCounter.ToString();

            _expenseRecords.Add(expenseRecord);

            return Ok(_expenseRecords);
        }

        [HttpDelete("{Id}")]
        public ActionResult Delete(string Id)
        {
            var expenseRecord = _expenseRecords.Find(x => x.Id == Id);
            if (expenseRecord is null) { return NotFound(); }
            _expenseRecords.Remove(expenseRecord);
            return NoContent();
        }
    }
}