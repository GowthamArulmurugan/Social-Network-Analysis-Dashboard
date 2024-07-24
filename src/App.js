import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
            id: '4de4545e-f924-4f1d-ba8d-21d9f32e8b2b',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=4de4545e-f924-4f1d-ba8d-21d9f32e8b2b&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyIsImtpZCI6Ik1HTHFqOThWTkxvWGFGZnBKQ0JwZ0I0SmFLcyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmUwMDg4N2EtMTljMy00MmFmLThkNWEtZTI2ZTFjODBmZjgyLyIsImlhdCI6MTcyMTYyMTA0MCwibmJmIjoxNzIxNjIxMDQwLCJleHAiOjE3MjE2MjUzMjcsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WEFBQUFlRmtYRnlBbldUWTh5ZWtTNU1iQ3VOSVhOcTlTZDhrL0Vkay9DK00rQUZqSFp5OHlMaURncEVidHBFcVlpWlI0IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQSIsImdpdmVuX25hbWUiOiJHb3d0aGFtIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiMTAzLjE5Ni4yOC4xNTQiLCJuYW1lIjoiR293dGhhbSBBIiwib2lkIjoiNjllOTZjYjItN2Q0ZS00YWNkLTk1YWQtNDRlMTZmMzZlZTRmIiwicHVpZCI6IjEwMDMyMDAzOUEyNkI1NTMiLCJyaCI6IjAuQVhZQWVvZ0Ffc01acjBLTld1SnVISURfZ2drQUFBQUFBQUFBd0FBQUFBQUFBQUMwQUdBLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6IjRmLW5xb2Jibi14aVNCOTkybnJmTlktVnJXZEI1VXZFSWROT3UwLTVzVm8iLCJ0aWQiOiJmZTAwODg3YS0xOWMzLTQyYWYtOGQ1YS1lMjZlMWM4MGZmODIiLCJ1bmlxdWVfbmFtZSI6Imdvd3RoYW1hLjIzbWNhQGtvbmd1LmVkdSIsInVwbiI6Imdvd3RoYW1hLjIzbWNhQGtvbmd1LmVkdSIsInV0aSI6InYtNFNubDd4QTBDSk1BZGsySy1XQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfaWRyZWwiOiIxIDE0In0.ZN11EHaJi1D-9qdZ_1E5u47v1xdnI-REx2X9i8QaEgVSkjnsSEdATvfxEos4N9tBEQFt6twPrkNfPS_RLto8xyxXP-YDvAJAo81RfK4HzlR1L6NvkQoGJkMVH1X_bQo1xyNZqEZV9lq6sErXii-uj9JMygACVBFxu6U1IltrW449YFH95-yMwBxGuIzBdtMmgoKY314Qa5FS7E9Yh4akAxe_LFetRHkyYxuYq2SemErqKnS9EzJIxV498EApFrtilXcdzdMis1yakPQgNF2nPiStEp6lwbJ4i0UkcSI4hN1bsPh3xhbLS_BlSQ8BfAVLqmWYg_JbmEBKf5nA76AQeg',
            tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }],
              ['visualClicked', () => console.log('visual clicked')],
              ['pageChanged', (event) => console.log(event)],
            ])
          }

          cssClassName={"Embeded-Container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
