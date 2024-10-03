using Real_Time_Chat_App.Models;
using System.Collections.Concurrent;

namespace Real_Time_Chat_App.DataService
{
    public class SharedDb
    {
        private readonly ConcurrentDictionary<string, UserConnection> _connections = new ();

        public ConcurrentDictionary<string, UserConnection> connections => _connections;
    }
}
