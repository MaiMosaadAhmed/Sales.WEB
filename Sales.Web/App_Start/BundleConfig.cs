using System.Web;
using System.Web.Optimization;

namespace Sales.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            // Script Bundles
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/assets/plugins/jquery.min.js"));

            //bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
            //            "~/Scripts/jquery.validate*"));

            //// Use the development version of Modernizr to develop with and learn from. Then, when you're
            //// ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            //bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
            //            "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/assets/plugins/bootstrap/js/bootstrap.min.js",
                      "~/assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js"
                      ));

            bundles.Add(new ScriptBundle("~/bundles/datatable").Include(
                      "~/assets/plugins/datatables/datatable.js",
                      "~/assets/plugins/datatables/datatables.min.js",
                      "~/assets/plugins/datatables/plugins/bootstrap/datatables.bootstrap.js",
                      "~/assets/plugins/datatables/table-datatables-buttons.js"
                      ));
            
            bundles.Add(new ScriptBundle("~/bundles/modal").Include(
                      "~/assets/plugins/bootstrap-modal/js/bootstrap-modalmanager.js",
                      "~/assets/plugins/bootstrap-modal/js/bootstrap-modal.js"
                      ));
            
            bundles.Add(new ScriptBundle("~/bundles/select").Include(
                      "~/assets/plugins/select2/js/select2.full.min.js",
                      "~/assets/scripts/pages/components-select2.js"
                      ));

            // Styles Bundles
            bundles.Add(new StyleBundle("~/assets/datatable.css").Include(
                      "~/assets/plugins/datatables/datatables.min.css",
                      "~/assets/plugins/datatables/plugins/bootstrap/datatables.bootstrap-rtl.css"));

            bundles.Add(new StyleBundle("~/assets/bootstrap.css").Include(
                      "~/assets/plugins/bootstrap/css/bootstrap-rtl.min.css",
                      "~/assets/plugins/bootstrap-switch/css/bootstrap-switch-rtl.min.css"));
            
            bundles.Add(new StyleBundle("~/assets/bootstrap-modal.css").Include(
                      "~/assets/plugins/bootstrap-modal/css/bootstrap-modal-bs3patch.css",
                      "~/assets/plugins/bootstrap-modal/css/bootstrap-modal.css"));
            
            bundles.Add(new StyleBundle("~/assets/select.css").Include(
                      "~/assets/plugins/select2/css/select2.min.css",
                      "~/assets/plugins/select2/css/select2-bootstrap.min.css"));

        }
    }
}
