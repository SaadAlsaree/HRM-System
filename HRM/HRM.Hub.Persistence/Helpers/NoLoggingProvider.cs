using Hangfire.Logging;

namespace HRM.Hub.Persistence.Helpers
{
    public class NoLoggingProvider : ILogProvider
    {
        public ILog GetLogger(string name)
        {
            return new NoLoggingLogger();
        }
    }

    public class NoLoggingLogger : ILog
    {
        public bool Log(Hangfire.Logging.LogLevel logLevel, Func<string> messageFunc, Exception exception = null)
        {
            if (messageFunc != null)
            {
                var message = messageFunc();
                if (message.Contains("Update Customer"))
                {
                    return true;
                }
            }
            return false;
        }
    }
}
