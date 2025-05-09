namespace HRM.Hub.Persistence.Helpers
{
    public class IOC
    {
        public static IServiceProvider CurrentProvider { get; internal set; }

        public static T Resolve<T>()
        {
            return CurrentProvider.GetService<T>();
        }
    }
}
