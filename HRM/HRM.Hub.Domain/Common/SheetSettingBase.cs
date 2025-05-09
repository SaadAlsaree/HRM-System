namespace HRM.Hub.Domain.Common
{
    public class SheetSetting
    {
        public string[] ComlumHeadrs { get; set; }
        public string[] ComlumHeadrsSum { get; set; }
        public List<List<object>> Data { get; set; }
        public List<object> Sum { get; set; }
        public string Title { get; set; }
        public string TitleSheet { get; set; }
    }
}