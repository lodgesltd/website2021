const Airtable = require("airtable");
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: process.env.AIRTABLE_API_KEY,
});
const base = Airtable.base(process.env.AIRTABLE_BASE_ID);

const table = base("disclaimer");

const data = [];
exports.handler = (event, context, callback) => {
  table
    .select({
      maxRecords: 100,
      view: "Grid view",
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function (record) {
          data.push(record);
        });
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
        } else {
          const body = JSON.stringify({ records: data });
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              "content-type": "application/json",
              "cache-control": "Cache-Control: max-age=60, public",
            },
          };
          callback(null, response);
        }
      },
    );
};
