
export const PROMPTS = {


    CodeExplain : `
        🧠 1. Code Explanation:
        Break down the code line-by-line or block-by-block.
        Clearly explain what each part of the code is doing in simple and understandable language.
        Highlight key operations, logic, and flow.

        🔎 2. Problem Identification:
        Find any bad practices, errors, inefficiencies, redundant code, or missing error handling.
        List issues point-by-point.

        🛠️ 3. Code Improvement:
        Suggest a cleaned, optimized, and professional version of the code.
        Fix all detected issues.
        Ensure the new version follows best coding standards (readability, performance, error handling, etc.).
        Keep the code style clean and properly indented.

        📋 4. Final Suggestions (Max 3 points):
        Give up to 3 tips or best practices the developer can apply in general for writing better code.
    ` , 

    Debug : `
    🧠 1. Code Understanding:
    Briefly summarize what the code is intended to do.
    Outline the main logic and structure at a high level.
    Identify any assumptions the code seems to rely on.

    🧩 2. Bug Identification:
    Detect and explain any runtime errors, logical bugs, edge case issues, or incorrect outputs.
    Spot any API misuse, invalid data handling, or assumptions that may fail.
    Highlight problems in variable scope, type mismatches, or uninitialized values.
    List issues point-by-point with clear justifications.

    🛠️ 3. Debugged and Improved Code:
    Provide a corrected, fully working version of the code.
    Ensure all bugs are fixed and the code follows robust error handling.
    Apply clean, readable formatting and use best practices.
    Add minimal comments only where they improve understanding.

    ✅ 4. Testing & Validation:
    Suggest a few test cases (including edge cases) to verify the fix.
    If applicable, explain how the changes address the original bug(s) and improve reliability.

    📋 5. Final Debugging Tips (Max 3 Points):
    Share up to 3 tips or reminders to help the developer avoid similar bugs in the future.
    Focus on debugging strategies, validation habits, or defensive coding.
    ` , 

    Complexity : `
    i gave you the code and you task is to give time as well as space complexity of that code note that do not give any description just give time as well as space complexity only in following manner 
    ⏱️ Time Complexity: display time complxity of the given code here .. 

    💾 Space Complexity: display the space complexity of the given code here .. 
    ` , 

    CommentGenerator : `
    🗒️ CODE COMMENTING :
    When the user provides a code snippet, rewrite the exact same code with added:
    Formal, clear, and understandable comments above or beside each relevant line or block.
    Use comments to explain the purpose, logic, and function of each part of the code.
    Keep the original code intact.
    Do not add any external description or output outside of the code.
    ` , 

    Summarizer : `
    📝 CODE SUMMARIZATION :
    When the user provides a code snippet, perform the following:
    Read and understand the entire code.
    Summarize its functionality, logic, and purpose in 5 to 10 concise lines.
    Focus only on what the code does, how it flows, and any important features or steps.
    Do not include explanations, comments, evaluations, or extra formatting.
    ` ,

    Optimizer : `
    ⚙️ CODE OPTIMIZER :
    When the user provides a code snippet, perform the following:
    Analyze and optimize the code for performance, readability, and efficiency.
    Remove redundant logic, improve algorithmic efficiency, and apply clean coding practices.
    Return only:
    The optimized code.
    A 2–3 line description summarizing what was improved or changed.
    ` , 

    Rating : `
    📈 CODE RATER :
    When the user provides a code snippet, follow these steps:
    Analyze the code for readability, structure, efficiency, error handling, and best practices.
    Based on the overall quality, assign a rating from 1 to 5:
    1 = Very poor
    5 = Excellent
    Do not provide any explanation, feedback, or additional output.
    Only return a single number (1 to 5) as the final result.
    give response like if the rating is 3 out of 5 then show ⭐⭐⭐stars and if the rating is 5 out of 5 then show 5 stars 
    ` ,


};


