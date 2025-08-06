@@ .. @@
-const UnderConstruction = () => {
+const UnderConstruction = ({ onEnter }) => {
   return (
-    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
+    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex items-center justify-center relative overflow-hidden">
       {/* Animated Background Elements */}
       <div className="absolute inset-0 overflow-hidden">
@@ .. @@
           </motion.div>
 
           {/* Action Buttons */}
-          <motion.div
-            initial={{ opacity: 0, y: 20 }}
-            animate={{ opacity: 1, y: 0 }}
-            transition={{ delay: 1.2 }}
-            className="flex flex-col sm:flex-row items-center gap-4"
-          >
-            <motion.a
-              href="mailto:hamzah.712680678@gmail.com"
-              whileHover={{ scale: 1.05 }}
-              whileTap={{ scale: 0.95 }}
-              className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center space-x-2"
-            >
-              <Mail size={18} />
-              <span>Get in Touch</span>
-            </motion.a>
-
-            <motion.button
-              whileHover={{ scale: 1.05 }}
-              whileTap={{ scale: 0.95 }}
-              className="px-8 py-3 border-2 border-neutral-600 text-neutral-300 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-400 transition-all duration-200"
-            >
-              Notify Me When Ready
-            </motion.button>
-          </motion.div>
+          {onEnter && (
+            <motion.div
+              initial={{ opacity: 0, y: 20 }}
+              animate={{ opacity: 1, y: 0 }}
+              transition={{ delay: 1.2 }}
+              className="flex flex-col sm:flex-row items-center gap-4"
+            >
+              <motion.a
+                href="mailto:hamzah.712680678@gmail.com"
+                whileHover={{ scale: 1.05 }}
+                whileTap={{ scale: 0.95 }}
+                className="px-8 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-200 flex items-center space-x-2"
+              >
+                <Mail size={18} />
+                <span>Get in Touch</span>
+              </motion.a>
+
+              <motion.button
+                onClick={onEnter}
+                whileHover={{ scale: 1.05 }}
+                whileTap={{ scale: 0.95 }}
+                className="px-8 py-3 border-2 border-neutral-600 text-neutral-300 rounded-lg font-semibold hover:border-primary-500 hover:text-primary-400 transition-all duration-200"
+              >
+                Enter Portfolio
+              </motion.button>
+            </motion.div>
+          )}
 
           {/* Social Links */}